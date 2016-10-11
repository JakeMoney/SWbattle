var varService = angular.module('varService',[]);
var app = angular.module('STBattle', ['ui.router','varService']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('menu', {
			url: '/menu',
			templateUrl: '/menu.html',
			controller: 'menuCtrl'
		})
		.state('prep', {
			url: '/prep',
			templateUrl: '/prep.html',
			controller: 'prepCtrl'
		})
		.state('army', {
			url: '/army',
			templateUrl: '/army.html',
			controller: 'armyCtrl'
		})
		.state('hero', {
			url: '/hero',
			templateUrl: '/hero.html',
			controller: 'heroCtrl'
		})
		.state('battle', {
			url: '/battle',
			templateUrl: '/battle.html',
			controller: 'battleCtrl'
		});
	$urlRouterProvider.otherwise('menu');
}]);

varService.service('gameVars', function()
{
	var forceChoice = "";

	var armies = {};
	var heros = {};

	var heroSelect = {
		name: "",
		image: "",
		side: "",
		power1: "",
		power2: ""
	};

	var armySelect = {
		name: "",
		image: "",
		side: "",
		weapons: 0,
		numbers: 0
	};

	var abilities = {
		heal: {
			name: "Force Heal",
			cost: 3,
			description: "Use the force to heal wounded soliders"
		},
		lightning: {
			name: "Force Lightning",
			cost: 6,
			description: "Use the force to unleash devastation on the enemy soliders"
		},
		inspire: {
			name: "Inspire",
			cost: 2,
			description: "Inspire your soliders.  They gain more attack."
		},
		scare: {
			name: "Looming Presence",
			cost: 3,
			description: "The enemy soliders are terrified by your arrival.  They lose attack."
		},
		blast: {
			name: "Force Blast",
			cost: 5,
			description: "Use the force to push back all enemy soliders."
		}
	};

	this.addHero =function(name, hero)
	{
		heros[name] = hero;
	};

	this.getHero = function(name)
	{
		return heros[name];
	};

	this.getAllHeros = function()
	{
		return heros;
	};

	this.addArmy = function(name, army)
	{
		armies[name] = army;
	};

	this.getAllArmies = function()
	{
		return armies;
	};

	this.getArmy = function(name)
	{
		return armies[name];
	};

	this.getCurForcChoice = function()
	{
		return forceChoice;
	};
	this.setCurForceChoice = function(choice)
	{
		if(choice ===1)
		{
			forceChoice = "light";
		}
		else
		{
			forceChoice = "dark";
		}
	};
	this.getCurHero = function()
	{
		return heroSelect;
	};
	this.setCurHero = function(inName)
	{
		heroSelect.name = heros[inName].name;
		heroSelect.image = heros[inName].image;
		heroSelect.side = heros[inName].side;
		heroSelect.power1 = heros[inName].power1;
		heroSelect.power2 = heros[inName].power2;
	};
	this.getCurArmy = function()
	{
		return armySelect;
	};
	this.setCurArmy = function(inName)
	{
		armySelect.name = armies[inName].name;
		armySelect.image = armies[inName].image;
		armySelect.side = armies[inName].side;
		armySelect.weapons = armies[inName].weapons;
		armySelect.numbers = armies[inName].numbers;
	};
	this.getAbility = function(name)
	{
		return abilities.name;
	};
});

app.controller('menuCtrl',function($scope, gameVars)
{
	$scope.chooseLight = function()
	{
		gameVars.setCurForceChoice(1);
		newHero = {
			name: "Luke Skywalker",
			image: "luke.jpg",
			side: "light",
			power1:"heal" ,
			power2:"inspire"
		};

		newArmy = {
			name: "Rebels",
			image: "rebel.jpg",
			side: "light",
			weapons: 6,
			numbers: 8
		};
		gameVars.addHero("luke",newHero);
		gameVars.setCurHero("luke");
		gameVars.addArmy("rebels",newArmy);
		gameVars.setCurArmy("rebels");
	};

	$scope.chooseDark = function()
	{
		gameVars.setCurForceChoice(2);
		newHero = {
			name: "Darth Vader",
			image: "vader.jpg",
			side: "dark",
			power1:"scare" ,
			power2:"blast"
		};

		newArmy = {
			name: "Imperials",
			image: "stormtroopers2.jpg",
			side: "dark",
			weapons: 10,
			numbers: 5
		};
		gameVars.addHero("vader",newHero);
		gameVars.setCurHero("vader");
		gameVars.addArmy("imperials",newArmy);
		gameVars.setCurArmy("imperials");
	};
});

app.controller('prepCtrl',function($scope,gameVars)
{
	$scope.hero = gameVars.getCurHero();

	$scope.heroName = $scope.hero.name;
	$scope.heroImage = $scope.hero.image;
	$scope.heroPower1 = $scope.hero.power1;
	$scope.heroPower2 = $scope.hero.power2;

	$scope.army = gameVars.getCurArmy();

	$scope.armyName = $scope.army.name;
	$scope.armyImage = $scope.army.image;
	$scope.armyWeapon = $scope.army.weapons;
	$scope.armySize = $scope.army.numbers;

	$scope.side = gameVars.getCurForcChoice();
});

app.controller('armyCtrl',[
	'$scope',
	'gameVars',
	function($scope)
	{

	}
]);

app.controller('heroCtrl',[
	'$scope',
	'gameVars',
	function($scope)
	{

	}
]);

app.controller('battleCtrl',[
	'$scope',
	'gameVars',
	function($scope)
	{

	}
]);
