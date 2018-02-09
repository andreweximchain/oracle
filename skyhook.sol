pragma solidity ^0.4.0;
import "github.com/orcalize/ethereum-api/oraclizeAPI.sol";

contract SkyHooks {
  string ipAddress;
  address owner;
  //latitude and longitude is represented in 10000th of degrees due to floating
  //point issues.
  uint latitude;
  uint longitude;

  //Basic constructor
  function SkyHooks(string _ipAddress, uint _latitude, uint _longitude, address _owner) public {
    owner = _owner;
    ipAddress = _ipAddress;
    latitude = _latitude;
    longitude = _longitude;
  }

  function changeOwner(address _newOwner) public {
    if(msg.sender != owner){
      return;
    }
    owner = _newOwner;
  }

  function updateLocation() {
    //TODO: make use of the oraclizeAPI to update latitude and longitude
    return;
  }

  function changeIp(string _newIpAddress) public {
    if(msg.sender != owner){
      return;
    }
    ipAddress = _newIpAddress;
    updateLocation();
  }


}
