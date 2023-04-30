


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			vehicles:[],
			films:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchStarWars:async(itemUrlTail) =>{
				let fetchUrl = "https://www.swapi.tech/api/"+ itemUrlTail;
				try{
					let response = await fetch(fetchUrl)
					if(!response.ok) return response.status

					let data = await response.json()
					let widget ={}
					widget[itemUrlTail]=data.results
					setStore(widget)
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
					console.log(store.favorites)
				}
				else{
					//if exisitng then delete
					let newFavorties=[...favorites]
					let itemIndex=favorites.findIndex(item=>item.id==widgetId)
					newFavorties.splice(itemIndex,1);
					setStore({favorties:newFavorties})
					console.log(itemIndex)
					console.log(favorites)
				}
			}	
		}
	};
};

export default getState;