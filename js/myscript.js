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


})