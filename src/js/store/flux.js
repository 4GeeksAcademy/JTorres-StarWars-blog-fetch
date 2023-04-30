


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			vehicles:[],
			films:[]
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
			FavoriteChecked:async(widgetId, name)=>{
				let {favorites}=getStore()
				if(!favorites.some(item=>item.id==widgetId)){
					// if non exisitng then add
					setStore({id: widgetId, name})
				}
				else{
					//if exisitng then delete
					let newFavorties=[...favorites]
					let ItemIndex=favorites.findIndex(item=>item.id==widgetId)
					newFavorties.splice(ItemIndex,1);
					setStore({favorties:newFavorties})
				}
			}	
		}
	};
};

export default getState;