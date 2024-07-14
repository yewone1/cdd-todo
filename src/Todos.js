import PropTypes from "prop-types"

function Page({labels, setLabel}) {
  const onClick = (deleteindex) => {
    const newLabels = labels.filter((_, index) => index !== deleteindex);
    setLabel(newLabels);
    console.log(deleteindex)
  }
  return (
    <div>
      <h1>할 일 목록</h1>
      {labels.map((todo, index) => (
        <div key={index}>
          <span>{todo}  </span>
          <button onClick={() => onClick(index)}>삭제</button>
        </div>
      ))}

    </div>
  );
}

export default Page;
