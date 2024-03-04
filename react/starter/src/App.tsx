import CustomButton from "./components/CustomButton";

function App() {
    return (
        <>
            <CustomButton onClick={() => console.log("pressed")}>
                button
            </CustomButton>
        </>
    );
}

export default App;
