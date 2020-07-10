import React,{useState} from 'react'

export const SeriesContext=React.createContext({
    series:[],
    toggleFav:(id)=>{}
})

export default props=>{
    const [seriesList,setSeriesList]=useState([
        {
            id:'S1',
            title:'Heirs',
            description:'He Who Wears the Crown Must Bear Its Weight, The Heirs',
            image:'https://6.vikiplatform.com/image/1e2423c802474fe0b3ef43090abfc610.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
            isFavorite:false
        },
        {
            id:'S2',
            title:'W',
            description:'W - Two Worlds',
            image:'https://6.vikiplatform.com/image/28505e2cd6fb46ae8a9af78a96701b2c.jpeg?x=b&s=590x330&q=h&e=t&f=t&cb=1',
            isFavorite:false
        },
        {
            id:'S3',
            title:'Pinocchio',
            description:'The lives of local news reporters, engaged in fierce battle as they hunt for truth 24 hours a day, grow closer to each other as they go through youth in this young adult drama',
            image:'https://6.vikiplatform.com/image/3f24f4ca63334c40b303780518299e7f.jpeg?x=b&s=590x330&q=h&e=t&f=t&cb=1',
            isFavorite:false
        },
        {
            id:'S4',
            title:'My ID is Gangnam Beauty',
            description:'This is a story of Kang Mi Rae (Im Soo Hyang), a girl once bullied for her looks.Mi Rae begins to recover her lost confidence and discovers that true beauty is not about whats on the outside',
            image:'https://6.vikiplatform.com/image/1b475cf3c0cf49f585422d418ff180f2.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
            isFavorite:false
        },
        {
            id:'S5',
            title:'To the Beautiful You',
            description:'A beautiful girl dresses up as a male and transfers to an all-boys school',
            image:'https://6.vikiplatform.com/image/4610d62def47493fbf7cec3333206c49.jpeg?x=b&s=590x330&q=h&e=t&f=t&cb=1',
            isFavorite:false
        },
        {
            id:'S6',
            title:'While You Were Sleeping',
            description:'A young woman with bad premonition dreams meets two people who suddenly develop the same ability.',
            image:'https://1.viki.io/c/33538c/while-you-were-sleeping-1560x872_highresolution.jpg?x=b&s=590x330&q=h&e=t&f=t&cb=1',
            isFavorite:false
        },
    ]
    )
    const toggleFavorite=curSeriesId=>{
        setSeriesList(curSeriesList=>{
          const seriesIndex = curSeriesList.findIndex(
            p => p.id === curSeriesId
          );
          const newFavStatus = !curSeriesList[seriesIndex].isFavorite;
          const updatedSeries = [...curSeriesList];
          updatedSeries[seriesIndex] = {
            ...curSeriesList[seriesIndex],
            isFavorite: newFavStatus
          };
          return updatedSeries
        })
      }

      return <SeriesContext.Provider value={{
        series:seriesList,
        toggleFav:toggleFavorite
      }}>
      {props.children}</SeriesContext.Provider>

}