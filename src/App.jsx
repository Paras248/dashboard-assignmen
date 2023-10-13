import NavBar from "./components/side-nav-bar/NavBar";
import styles from "./App.module.css";
import DashBoardContent from "./components/dashboard-content/DashBoardContent";

function App() {
    return (
        <>
            <div className={styles["container"]}>
                <NavBar />
                <DashBoardContent />
            </div>
        </>
    );
}

export default App;
