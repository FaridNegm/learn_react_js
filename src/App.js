import logo from './logo.svg';
import './App.css';
import ComTest from './components/com_test/Navbar';
import Posts from './components/com_test/Posts';
import Tags from './components/com_test/Tags';


function App() {
  const post1 = {
    title: "post number 1", 
    content: "Cupidatat mollit ex adipisicing nostrud culpa non deserunt enim tempor laboris mollit."
  } 
  
  const post2 = {
    title: "post number 2", 
    content: "Magna irure ullamco Lorem culpa ipsum do non. Velit culpa ut minim dolore pariatur ad velit id magna deserunt cupidatat minim anim voluptate. Reprehenderit adipisicing elit pariatur et laborum anim nostrud dolor et eu in."
  } 

  return (
    <div className="App">
      <ComTest />
      
      <div style={{ width: '100%', display: 'block' }}>
        <div style={{ width: '60%', }}>
          <Posts title={post1.title} content={post1.content} />

          <Posts title={post2.title} content={post2.content}>
              <h1>Hello 22222</h1>
              <button>btn 2</button>
          </Posts>
          
          <Posts />
        </div>

        <div style={{ width: '40%', }}>
          <Tags />
          <Tags />
          <Tags />
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default App;
