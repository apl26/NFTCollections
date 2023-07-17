/* ALIYAH PATRICE P. LUNTOK
JULY 16, 2023
NFT PROGRAM */

// Create a variable that can hold a number of NFTs
var numberofNFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, genre, duration) {
  var assets = {
    // Create an object that holds the metadata for the NFTs
    name: name,
    genre: genre,
    duration: duration,
  };

  numberofNFTs.push(assets); // Add the NFT object to the numberofNFTs array
}

// Create a loop that will go through an array of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (var i = 0; i < numberofNFTs.length; i++) {
    console.log("Name: " + numberofNFTs[i].name);
    console.log("Genre: " + numberofNFTs[i].genre);
    console.log("Duration: " + numberofNFTs[i].duration);
    console.log("------------");
  }
}

// Print the total number of NFTs we have minted
function getTotalSupply() {
  var totalSupply = numberofNFTs.length;
  console.log("Total number of NFTs is " + totalSupply);
}

// Call your functions below this line

// Mint multiple NFTs with their metadata
mintNFT("Vampire", "pop", "average");
mintNFT("Duvet", "Alternative Rock", "long");
mintNFT("Crave you", "Indie", "average");
mintNFT("Island in the Sun", "Rock", "average");

// Print all NFTs and their metadata
listNFTs();

// Print the total number of minted NFTs
getTotalSupply();
