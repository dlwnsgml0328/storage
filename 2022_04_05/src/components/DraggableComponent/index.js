import React, { useCallback, useEffect, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { CustomForm, DragContainer, ButtonContainer } from "./style";

const DraggableComponent = () => {
  const [items, setItems] = useState([
    { id: "1", content: `item 1`, text: "" },
    { id: "2", content: `item 2`, text: "" },
    { id: "3", content: `item 3`, text: "" },
    { id: "4", content: `item 4`, text: "" },
    { id: "5", content: `item 5`, text: "" },
  ]);
  const cnt = useRef(6);

  useEffect(() => {
    console.log("items:", items);
  }, [items]);

  const onDragEnd = (result) => {
    console.log("result: ", result);
    console.log("result.destination: ", result.destination);
    if (!result.destination) {
      return;
    }

    const arr = reorder(items, result.source.index, result.destination.index);
    setItems(arr);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onAdd = useCallback(() => {
    let arr = [];

    arr = [...items];

    arr.push({
      id: cnt.current.toString(),
      content: "item " + cnt.current.toString(),
    });

    setItems(arr);
    cnt.current += 1;
  }, [items, cnt]);

  const onChange = useCallback(
    (e, idx) => {
      console.log("e: ", e.target.value);
      console.log("idx: ", idx);
      let states = [...items];
      states.find((item) => item.id === idx).text = e.target.value;

      setItems(states);
    },
    [items]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("items: ", items);
    },
    [items]
  );

  const onFilter = useCallback(
    (idx) => {
      let arr = [...items];
      arr.splice(idx, 1);
      setItems(arr);
    },
    [items]
  );

  return (
    <CustomForm onSubmit={onSubmit}>
      <ButtonContainer>
        <button type="button" onClick={onAdd}>
          Add
        </button>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </ButtonContainer>

      <DragContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="flex"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="id">{item.id}</span>
                        <span className="content" type="text">
                          {item.content}
                        </span>
                        <input
                          type="text"
                          value={item.text}
                          onChange={(e) => onChange(e, item.id)}
                        />
                        <span
                          onClick={() => onFilter(index)}
                          className="remove"
                        >
                          [X]
                        </span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </DragContainer>
    </CustomForm>
  );
};

export default DraggableComponent;
