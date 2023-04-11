import MainArticle from "./mainSecArticle"


const MainSection = (props) =>{
    return <section className='mainSectionSection'>
             <MainArticle 
             color = 'green'  text = 'To Do' />

             <MainArticle
             
              color = 'purple'  text = 'Doing' />

             <MainArticle color = 'green' 
              text = 'To Do' />

            {/* <MainArticle/> */}
        </section>

}
export default  MainSection