var myRover = {
  position: [0,0],
  direction: 'N'
};



function goForward(cow) {
  switch(cow.direction) {
    case 'N':
      cow.position[0]++
      break;
    case 'E':
      cow.position[1]++
      break;
    case 'S':
      cow.position[0]--
      break;
    case 'W':
      cow.position[1]--
      break;
  };

  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
}

function goBackward(rover) {
  switch(rover.direction){
    case 'N':
      rover.position[0]--
      break;
      case 'E':
        cow.position[1]--
        break;
      case 'S':
        cow.position[0]++
        break;
      case 'W':
        cow.position[1]++
        break;

      }
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}



/*vuelta 360 hacia la izq.*/

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
    rover.direction = 'E';
    break;
    case 'E':
    rover.direction = 'S';
    break;
    case 'S':
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'N';
    break;
  };
    console.log("New Rover direction: [" + myRover.position + " , " + myRover.direction + "]")
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'S';
    break;
    case 'S':
    rover.direction = 'E';
    break;
    case 'E':
    rover.direction = 'N';
    break;
  };
    console.log("New Rover direction: [" + myRover.position + " , " + myRover.direction + "]")
}
///controls///
function controlRover() {
  var controlRover = document.getElementById("controlRover").value;

  for(i = 0; i < cmdControl.length; i++){
    if (cmdControl[i] == 'f') {
      goForward(myRover);
    }
    else if (cmdControl[i] == 'b') {
      goBackward(myRover);
    }
    else if (cmdControl[i] == 'l') {
      goLeft(myRover);
    }
    else if (cmdControl[i] == 'r') {
      goRight(myRover);
    }
    else {
      console.console.log('ERROR');
      return control();
    }

  }
}
