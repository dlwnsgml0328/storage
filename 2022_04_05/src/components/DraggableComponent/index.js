import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useForm, useFieldArray } from "react-hook-form";

import { CustomForm, DragContainer, ButtonContainer } from "./style";

const DraggableComponent = () => {
  const [items] = useState([
    { id: "1", content: `item 1`, text: "" },
    { id: "2", content: `item 2`, text: "" },
    { id: "3", content: `item 3`, text: "" },
    { id: "4", content: `item 4`, text: "" },
    { id: "5", content: `item 5`, text: "" },
  ]);

  // useForm

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({ defaultValues: { dragItems: items } });

  // useFieldArray
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "dragItems",
  });

  useEffect(() => {
    console.log("fields are changed: ", fields);
  }, [fields]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    move(result.source.index, result.destination.index);
  };

  const onAdd2 = () => {
    append({
      id: fields.id + 1 + "",
      content: `item ${fields.length + 1}`,
      text: "",
    });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("fields: ", fields);
    },
    [fields]
  );

  const onFilterInput = (index) => {
    remove(index);
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <ButtonContainer>
        <button type="button" onClick={onAdd2} disabled={isSubmitting}>
          Add
        </button>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </ButtonContainer>

      <DragContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <FieldList
                  fields={fields}
                  onFilterInput={onFilterInput}
                  register={register}
                  isSubmitting={isSubmitting}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </DragContainer>
    </CustomForm>
  );
};

const FieldList = React.memo(function FieldList({
  fields,
  onFilterInput,
  register,
  isSubmitting,
}) {
  console.log("register: ", register());
  return fields.map((field, index) => (
    <Draggable draggableId={`${field.id}`} index={index} key={`${field.id}`}>
      {(provided, snapshot) => (
        <div
          className="flex"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span name={`items[${index}].id`} className="id">
            {index}
          </span>
          <span
            name={`items[${index}].content`}
            className="content"
            type="text"
          >
            {field.content}
          </span>
          <input
            name={`items[${index}].text`}
            type="text"
            defaultValue={field.text}
          />
          <span onClick={() => onFilterInput(index)} className="remove">
            [X]
          </span>
        </div>
      )}
    </Draggable>
  ));
});

export default DraggableComponent;
