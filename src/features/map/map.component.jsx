import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import './style.css';
import { connect } from 'react-redux';
// import keyIndex from 'react-key-index';

function MapTile(props) { 
    return <div 
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
    }}
    />
 }
 function getTileSprite(type) {
         // eslint-disable-next-line
    switch (type) {
        case 100:
            return 'grass'
        case 101:
            return 'black'
        case 102:
            return 'tree'
        case 103: 
            return 'tree2'
        case 104:
            return 'tree3'
        case 105:
            return 'sand'
        case 107:
            return 'bridgeEW'
        case 106:
            return 'bridgeNS'
//=======================Interractive Tiles=================================
        case 109:
            return 'chest'
        case 110:
            return 'cave'
        case 111:
            return 'tower'
//==========================Town Tiles ===================================
        case 112:
            return 'village'
        case 113:
            return 'town_left'
        case 114:
            return 'town_right'
//=========================Castle Tiles===============================================
        case 120:
            return 'castle_top_left'
        case 121:
            return 'castle_top_right'
        case 122: 
            return 'castle_bottom_left'
        case 123:
            return 'castle_bottom_right'
//======================Impassable Tiles===========================
        case 150:
            return 'rock'
        case 151:
            return 'rock2'
        case 168:
            return 'locked_door'
        case 180: 
            return 'onetile_riverNS'
        case 181: 
            return 'onetile_riverEW'
        case 160: 
            return 'water'
        case 161:
            return 'lake_EastShore'
        case 162:
            return 'lake_SouthShore'
        case 163:
            return 'lake_WestShore'
        case 164:
            return 'lake_NorthShore'
        
        
//============In Town Tiles ===============================================
        case 152:
            return 'stonewall'
        case 153:
            return 'stonewall_back'
        case 155:
            return 'inn_sign'
        case 156:
            return 'armory_sign'
        case 170:
            return 'merchant_stall_hor_south'
        case 171:
            return 'merchant_stall_vert_west'
        case 172:
            return 'merchant_stall_vert_east'
        case 200:
            return 'pathway'
        case 201:
            return 'flowers'
        case 202:
            return 'shrubs'
        case 205:
            return 'stairs'
        case 206:
            return 'stairsDown'
    }




    }
//==================================================================
   //=====================================================================================
   
 function MapRow(props) { 
     let myId = [props.tiles.index]

     return <div className='row'>

     {
         props.tiles.map(tile => 
         <MapTile key={myId++} tile={tile}         
         /> )
     }
     </div> 
  }

function Map(props) {
    let myMapId = [props.tiles.index]

        return (
            <div 
         style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            border: '2px solid white',
            backgroundColor: '#42b842',
            width: '800px',
            height: '600px',
            margin: '0 auto',
        }}
        >
        {
            props.tiles.map( row => <MapRow key={myMapId++} tiles={row} /> )
        }
        </div>
    )
}

function mapStateToProps(state){
return {
    tiles: state.map.tiles,

}
}
export default connect(mapStateToProps)(Map);