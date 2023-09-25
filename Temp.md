<!-- BACKEND -->
Routes:-
    AuthRoutes:-
        LoginRoute
        RegisterRoute
        GetTrainRoute
        GetWagonRoute

EndPoints:-
    /api/login
    /api/register
    /api/?TrainID
    /api/?TrainID/?wagonID

Collections:-
    USERS:-
        _id
        uniqueID
        hashedPassword

    DATA:-
        _id


    <!-- TRAINS:-
        _id
        Train Number        
        TripID: if any
    
    WAGONS:-
        _id (WagonID)
        Wagon Number
        Capacity
        Current Load
        Type

    TRIPS:-
        _id (Trip Unique ID)
        Trip Status (Upcoming / Live / Ended)
        Start Point
        Destination
        Train Number
        Wagon Number Array :- [Wagon1ID ,Wagon2ID, Wagon3ID ...] -->



<!-- FRONTEND -->
Screen1:-
    Login:-

Screen2:-
    Search:-

Screen3:-
    Train Dashboard:-
        Train Number
        Number of Wagon
        Start Point
        Destination

Screen4:-
    Wagon Dashboard:-
        Wagon Number
        Weight
        Temperature
        Humidity
        Height
        Load


<!-- Explaination -->

Pehle Hum Login Karenge.
Succesfull Login ke baad hum Search page pe honge.

Waha hum Train ID dalnge,
fir Train Dashboard khulega:-
    Train Number
    Trip Status(Trip pe hai ya ruki hui hai)
    Number of Wagon 
    Start Point
    Destination

    Upar Option Hoga, see individual Wagons:-
        uspe click karte hi sab wagons ke numbers ki list khul jayegi:-
            unme se kisi ke click karte hi alag page khul jayega jaha us wagon ki information hogi:-
                Humidity
                Load
                Capacity
                Wagon ID
