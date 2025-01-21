import Row from "./Row.jsx";
export default function GameLayout(props) {
  function layout() {
    const rowGrid = [];
    for (let i = 0; i < 6; i++) {
      rowGrid.push(<div key={i + 6} />);
      rowGrid.push(
        <Row
          key={i}
          id={i}
          editable={props.activeRow === i ?? false}
          rowBackground={props.rowBackGround[i]}
        />
      );
    }
    return rowGrid;
  }
  return <>{layout()}</>;
}
