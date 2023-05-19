import './App.css';
import Header from "./sections/Header.js";
import Nav from "./sections/Nav.js";
import Main from "./sections/Main.js";
import Footer from "./sections/Footer.js";

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Header}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
    </>
  );
}

export default App;
