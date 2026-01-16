export default function PhotoLayoutPage(props:{
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>This is layout page </h1>
      {props.children}
      {props.modal}
    </div>
  );
}