import React, { useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useForm, useFieldArray } from "react-hook-form";

import { DragContainer, ButtonContainer } from "./style";

// props 라고 가정
const items = [
  { order: "1", content: `item 1`, text: "" },
  { order: "2", content: `item 2`, text: "" },
  { order: "3", content: `item 3`, text: "" },
  { order: "4", content: `item 4`, text: "" },
  { order: "5", content: `item 5`, text: "" },
];

const OriginalDraggable = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { dragItems: items },
    shouldUseNativeValidation: true,
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "dragItems",
  });

  const onSubmit = (data, e) => console.log("success: ", data, e);
  const onError = (errors, e) => console.log("errors: ", errors, e);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    move(result.source.index, result.destination.index);
  };

  const onFilter2 = useCallback(
    (index) => {
      remove(index);
    },
    [remove]
  );

  return (
    <DragContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <form onSubmit={() => console.log("submit")}>
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

          <ButtonContainer>
            <button
              type="button"
              onClick={() =>
                append({
                  order: (fields.length + 1).toString(),
                  content: `item ${fields.length + 1}`,
                  text: "",
                })
              }
              disabled={isSubmitting}
            >
              Add
            </button>
            <button type="button" onClick={handleSubmit(onSubmit, onError)}>
              Submit
            </button>
          </ButtonContainer>
        </form>
      </DragDropContext>
    </DragContainer>
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
      <Draggable draggableId={field.order} index={index} key={field.order}>
        {(provided, snapshot) => (
          <div
            key={field.order}
            className="flex"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <input
              name={`dragItems[${index}].order`}
              ref={register()}
              type="text"
              className="id"
              defaultValue={field.order}
              readOnly
            />

            <input
              name={`dragItems[${index}].content`}
              ref={register()}
              className="content"
              type="text"
              defaultValue={field.content}
              readOnly
            />
            <input
              key={`${field.order}`}
              name={`dragItems[${index}].text`}
              ref={register({
                maxLength: {
                  value: 255,
                  message: "title maximum 255",
                },
              })}
              type="text"
              defaultValue={field.text}
              maxLength={255}
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
