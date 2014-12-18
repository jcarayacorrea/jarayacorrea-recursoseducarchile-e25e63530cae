/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
  , nodes  = cocos.nodes          // Convenient access to 'nodes'
  , events = require('events')    // Import the events module
  , geo    = require('geometry')  // Import the geometry module
  , ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
  , Scene    = nodes.Scene
  , Label    = nodes.Label
  , Director = cocos.Director
  , Nodes    = nodes.Node
  
  // Public Class
  

function BtnActivity(){
    BtnActivity.superclass.constructor.call(this)
    
    
}
BtnActivity.inherit(Nodes)
module.exports= BtnActivity


