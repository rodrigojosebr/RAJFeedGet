interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return (
    <button>{props.text ?? 'Default'}</button>
  )
}

function App() {
  return (
    <div>
      <Button text="Hello 1" />
      <Button text="Hello 2" />
      <Button />
    </div>
  )
}

export default App
