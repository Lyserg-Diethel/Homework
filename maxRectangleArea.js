/*
Represent the data about 5 rectangles wih the following properties:

	id:'r1' , height: 40 , width: 20,
	id:'r2' , height: 30, width: 30,
	id:'r3' , height: 10, width: 80,
	id:'r4' , height: 90, width: 2,
	id:'r5' , height: 20, width: 20,

*/


let rectangles = {
	'r1':{
		'id': 'r1',
		'height': 40, 
		'width': 20,
	},
	'r2':{
		'id': 'r2',
		'height': 30, 
		'width': 30,
	},
	'r3':{
		'id': 'r3',
		'height': 10, 
		'width': 80,
	},
	'r4':{
		'id': 'r4',
		'height': 90, 
		'width': 2,
	},
	'r5':{
		'id': 'r5',
		'height': 20, 
		'width': 20,
	},
	'findLargestRectangleMethod': function(){
    let largestRectID;
    let max = 0;
    let compare;
        
    for(each in this){
        compare = (this[`${each}`].height) * (this[`${each}`].width);
            
        if(compare > max) {
        max = compare;
        largestRectID = this[`${each}`].id;
        }
    }
    return largestRectID;
    }
}

const findLargestRectangleFunction = function(rectangles){
    let largestRectID;
    let max = 0;
    let compare;

    for(each in rectangles){
        compare = (rectangles[`${each}`].height) * (rectangles[`${each}`].width);

        if(compare > max) {
            max = compare;
            largestRectID = rectangles[`${each}`].id;
        };
    }
    return largestRectID;
}



//Write a function which will return the id of the rectangle with the bigest area.
//Exepcted output: r2.