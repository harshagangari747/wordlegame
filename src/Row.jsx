export default function Row({ id, editable, rowBackground }) {
  let inputClass = "inputBox";
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
        />
      );
    }
    return singleRow;
  }
  return <>{getRow()}</>;
}
