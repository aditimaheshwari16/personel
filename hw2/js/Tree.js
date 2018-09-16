/** Class representing a Tree. */
var list=[];
class Tree {
	/**
	 * Creates a Tree Object
	 * parentNode, children, parentName,level,position
	 * @param {json[]} json - array of json object with name and parent fields
	 */

	constructor(json) {



		var i;
	    for (i=0;i< json.length;i++) {

            var node = new Node(json[i].name, json[i].parent);
            list.push(node);


        }

         list.map(v =>v.parentNode = list.filter(function(s){return s.name == v.parentName}));

	     list.map(v =>v.children = list.filter(function(s){return s.parentName == v.name}));


	    this.buildTree();
	    console.log(list);


		}




	/**
	 * Function that builds a tree from a list of nodes with parent refs
	 */
	buildTree() {

        //Assign Positions and Levels by making calls to assignPosition() and assignLevel()
        var i, j
		var level = 0;

        var position = 0;

        for (i = 0; i < list.length; i++) {
            var lev = this.assignLevel(list[i], level);
            list[i].level = lev;
        }
          for (i = 0; i < list.length; i++) {
          	this.assignPosition(list[i], position);

        }
/*
        var child;
        i = 0;

        for (var l = 0; l < list.length; l++) {
        	j=0;
        	child=1;

            if (list[i].level == 0) {
                list[i].position= position;
                break;
            }


            if (list[i].parentNode.children != 0) {
                if (list[i].parentNode.position == j) {
                    while (child <= list[i].parentNode.children.length) {
                        list[i].children[child-1]=position;
                        child++;
                        position++;
                    }
                    j++;
                }
            }


        }*/
    }






	/**
	 * Recursive function that assign positions to each node*/

	assignPosition(node, position) {

        var i;
        var levelList = [];
        var minLevel = [0];



         for (var i = 0; i < 4; i++) {
            levelList[i] = list.filter(function (m){
                return m.level == i;
            });

        }


        for (var i = 0; i < 4; i++) {
            var j;

            for (j = 0; j < levelList[i].length; j++) {

                if (levelList[i][j].children.length!= 0) {
                    minLevel[i+1] = j;
                    break;
                }


            }

        }


        for (var i = 0; i < 4; i++) {
        	var l=0;

            for (var j = 0; j < levelList[i].length; j++) {

            	if(i==0 & j==0)
				{
            		levelList[i][j].position=minLevel[i]+l;
            		break;
				}


            	levelList[i][j].position=minLevel[i]+l;
            	l++;

            }


            }



    }








	/**
	 * Recursive function that assign levels to each node
	 */
	assignLevel(node, level)
		{


            if(node.parentName == "root") {
                return level;
            }

	    	else {
                level = level+1;
                return this.assignLevel(node.parentNode[0] , level);
            }

	}

	/**
	 * Function that renders the tree
	 */
	renderTree() {/*
		svg = d3.select("body")
  .append("svg")
  .attr("width", 250)
  .attr("height", 200);
        var dataset=[];
for (let i = 0; i < 10; ++i) {
  dataset.push({ x: list.level,
                 y: list.position});
}
console.log(dataset);

const s = 100;
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => d.x*s)
  .attr("cy", d => d.y*s)
  .attr("r", 5);*/

    }

}