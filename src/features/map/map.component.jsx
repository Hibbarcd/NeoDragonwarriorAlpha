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
        case 106:
            return 'hills'
        case 107:
            return 'bridgeEW'
        case 108:
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
        // case 113:
        //     return 'town_left'
        // case 114:
        //     return 'town_right'
//==========================Dungeon Tiles =========================================
        case 115:
            return 'dungeon_floor'
        case 151:
            return 'dungeon_torch'
        case 152:
            return 'dungeon_wall'
        case 153:
            return 'dungeon_wall2'
        case 154:
            return 'dungeon_water'
        case 135:
            return 'dungeon_bridge'
        case 802:
            return 'dungeon_chest'
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
        case 851:
            return 'locked_door'
        case 860:
            return 'poison_mountains'
        case 169: 
            return 'well'
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
        case 195:
            return 'village_tree'
        case 196:
            return 'grass_posts'
        
        
//============In Town Tiles ===============================================
        case 173:
            return 'stonewall'
        case 174:
            return 'stonewall_back'
        case 175:
            return 'inn_sign'
        case 156:
            return 'armory_sign'
        case 157:
            return 'healer_sign'
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
        case 203:
            return 'village_grass'
        case 204:
            return 'grave'
        case 805:
            return 'stairs'
        case 806:
            return 'stairsDown'
        case 807:
            return 'caveStairsUp'
//==========Damaging Tiles==============================================================
        case 901:
            return 'damage_floor'
        case 902:
            return 'poison_swamp'
//========================================================================
/* 
800/850-interractive tiles, passable
851-899-interractive tiles, impassible
900-damage causing tiles
*/
//=======================================================================
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