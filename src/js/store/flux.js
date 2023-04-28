


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchStarWars:async(itemUrlTail) =>{
				let fetchUrl = "https://www.swapi.tech/api/"+itemUrlTail;
				try{
					let response = await fetch(fetchUrl)
					if(!response.ok) return response.status

					let data = await response.json()
					let item ={}
					item[itemUrlTail]=data
				}
				catch (error){
					console.error(error)
				}
			}	
		}
	};
};

export default getState;
