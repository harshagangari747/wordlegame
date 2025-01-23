export default function Row({ id, editable, rowBackground }) {
  let inputClass = "inputBox";

  function handleNextFocusInput(event) {
    let row = parseInt(event.target.id[0]);
    let col = parseInt(event.target.id[1]) + 1;
    console.log(row, col);
    if (col < 5) {
      let inputTag = document.getElementById(row + "" + col);
      inputTag.focus();
    }
  }
  function getRow() {
    const singleRow = [];
    for (let i = 0; i < 5; i++) {
      singleRow.push(
        <input
          key={id + "" + i}
          id={id + "" + i}
          type="text"
          maxLength={1}
          disabled={!editable}
          className={
            inputClass +
            " " +
            (rowBackground[i] ? rowBackground[i] : "") +
            " border-1 w-20 h-20 sm:w-18 sm:h-18 md:w-17 md:h-17 lg:w-25 lg:h-25"
          }
          onChange={handleNextFocusInput}
        />
      );
    }
    return singleRow;
  }
  return <>{getRow()}</>;
}
