/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
,Rect     = geo.Rect
, MenuItemImage = nodes.MenuItemImage

function BtnHome(){
    BtnHome.superclass.constructor.call(this,{
        normalImage: path.join(__dirname, '../resources/HUD_BotonHome.png'),
        selectedImage: path.join(__dirname, '../resources/HUD_BotonHomeHold.png')
        })
    var s = Director.sharedDirector.winSize
        
    this.position= ccp(this.contentSize.width*0.6,s.height-(this.contentSize.height*0.6))
    
    
      
      
}
BtnHome.inherit(MenuItemImage)  
module.exports = BtnHome
