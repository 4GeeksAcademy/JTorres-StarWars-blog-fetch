import { element } from "prop-types";



const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			vehicles:[],
			films:[],
			favorites:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchStarWars:async(itemUrlTail, page = 1, limit = 21) =>{
				let baseUrl = `https://www.swapi.tech/api/${itemUrlTail}?page=${page}&limit=${limit}`
				try{
					let response = await fetch(baseUrl)
					if(!response.ok) return response.status

					let data = await response.json()
					let widget ={}
					widget[itemUrlTail]=data[itemUrlTail=="films"?"result":"results"].map(item=>(
							{...item, 
								img:`https://starwars-visualguide.com/assets/img/${itemUrlTail=="people"?"characters":itemUrlTail}/${item.uid}.jpg`
							}))
					setStore(widget)
				}
				catch (error){
					console.error(error)
				}
			},
			fetchStarWarsDetails:async(itemUrlTail, widget, Id)=>{
				let baseUrl = `https://www.swapi.tech/api/${itemUrlTail}`
				let imgUrl = `https://starwars-visualguide.com/assets/img/${itemUrlTail}/.jpg`
				try{
					let response = await fetch(baseUrl)
					if(!response.ok) return response.status

					let data = await response.json()
					let element = {}
					element[Id] = {...data.result.properties, img:`https://starwars-visualguide.com/assets/img/${widget=="people"?"characters":widget}/${Id}.jpg`}
					setStore({data:element})
					console.log(data)
				}
				catch (error){
					console.error(error)
				}
			},
			FavoriteChecked:(widgetId, itemName)=>{
				let {favorites}=getStore()
				if(!favorites.some(item=>item.id==widgetId)){
					// if non exisitng then add
					setStore({favorites:[...favorites, {id:widgetId, itemName}]})
					console.log(getStore().favorites)
				}
				else{
					//if exisitng then delete
					let newFavorites=[...favorites]
					let itemIndex=favorites.findIndex(item=>item.id==widgetId)
					newFavorites.splice(itemIndex,1);
					setStore({favorites:newFavorites})
					console.log(itemIndex)
					console.log(favorites)
				}
			},
			deleteFavorite:(name)=>{
				let {favorites} = getStore()
				let newFavorites=[...favorites]
					let itemIndex=favorites.findIndex(item=>item.itemName==name)
					newFavorites.splice(itemIndex,1);
					setStore({favorites:newFavorites})
					console.log(itemIndex)
					console.log(favorites)
			}
		}
	};
};

export default getState;