const url = "https://covid19.mathdro.id/api/countries/india";
const urlAll = "https://covid19.mathdro.id/api";


let app = angular.module("MyApp", [])
app.controller("MyCtrl", ($scope, $http) => {
    //this is my controller
    $scope.title = "Covid 19 current Info"

    console.log("App loaded")

    $scope.changeValue = () => {
        $scope.title = "This is Home"
    }


    //calling Api to get all data 

    $http.get(urlAll).then(
            (response) => {
                //success 
                console.log("API is called successfully ")
                console.log(response.data)

                $scope.all_data = response.data;

            },
            (error) => {
                //unsuccess
                console.log(error)

            }
        )
        //get country data

    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == '') {
            console.log("empty value for country")
            $scope.c = undefined;
            return
        }

        $http.get(`${urlAll}/countries/${country}`).then((response) => {
                //success
                console.log("successfully called country api ")
                console.log(response.data)
                $scope.c_data = response.data

            },
            (error) => {
                //error
                console.log("Error calling country data api ")


            });

    }


})