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
          className={inputClass + " " + rowBackground[i]}
          onChange={handleNextFocusInput}
        />
      );
    }
    return singleRow;
  }
  return <>{getRow()}</>;
}
