import React, { useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useForm, useFieldArray } from "react-hook-form";

import { CustomForm, DragContainer, ButtonContainer } from "./style";

// props 라고 가정
const items = [
  { id: "1", orderNum: "1", content: `item 1`, text: "" },
  { id: "2", orderNum: "2", content: `item 2`, text: "" },
  { id: "3", orderNum: "3", content: `item 3`, text: "" },
  { id: "4", orderNum: "4", content: `item 4`, text: "" },
  { id: "5", orderNum: "5", content: `item 5`, text: "" },
];

const OriginalDraggable = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm({ defaultValues: { dragItems: items } });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "dragItems",
  });

  //   console.log("fields are: ", watch("dragItems"));
  console.log("real fields are: ", fields);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    move(result.source.index, result.destination.index);
  };

  const onSubmit = useCallback(
    (e, data) => {
      e.preventDefault();
      console.log("fields: ", fields);
      console.log("result: ", data);
    },
    [fields]
  );

  const onFilter2 = useCallback(
    (index) => {
      remove(index);
    },
    [remove]
  );

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <ButtonContainer>
        <button
          type="button"
          onClick={() =>
            append({
              orderNum: (fields.length + 1).toString(),
              content: `item ${fields.length + 1}`,
              text: "",
            })
          }
          disabled={isSubmitting}
        >
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
                <FiledList
                  fields={fields}
                  register={register}
                  isSubmitting={isSubmitting}
                  onFilter2={onFilter2}
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
const FiledList = React.memo(function FiledList({
  fields,
  register,
  onFilter2,
  isSubmitting,
}) {
  return fields.map((field, index) => {
    return (
      <Draggable draggableId={field.id} index={index} key={field.id}>
        {(provided, snapshot) => (
          <div
            key={field.id}
            className="flex"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span name={`dragItems[${index}].id`} className="id">
              {index}
            </span>
            <span
              name={`dragItems[${index}].content`}
              className="content"
              type="text"
            >
              {field.content}
            </span>
            <input
              key={`${field.id}`}
              name={`dragItems[${index}].text`}
              ref={register()}
              type="text"
              defaultValue={field.text}
            />
            <span onClick={() => onFilter2(index)} className="remove">
              [X]
            </span>
          </div>
        )}
      </Draggable>
    );
  });
});

export default OriginalDraggable;
