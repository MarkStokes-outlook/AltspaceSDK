'use strict';

import {AFrameComponent} from './AFrameComponent';

/**
* @name module:altspace/components.one-per-user
* @class
* @extends module:altspace/components.AFrameComponent
* @classdesc Instantiates an entity for every user in the space using [sync-system]{@link module:altspace/components.sync-system}. @aframe
* @example <a-mixin id='handbox' n-skeleton-parent='part: hand; side: right' geometry='primitive: box;'></a-mixin>
* <a-entity one-per-user='mixin: #handbox'></a-entity>
*/
class OnePerUser extends AFrameComponent
{
	get schema(){
		return {
			/**
			* A comma-separated list of mixin ids that are used to instantiate the object.
			* @member {string} mixin
			* @instance
			* @memberof module:altspace/components.one-per-user
			*/
			mixin: {type: 'string'},

			/**
			* A selector specifying which element should be the parent of the instantiated entity.
			* Defaults to the parent node (i.e. new element becomes a sibling of this entity).
			* @member {string} [parent]
			* @instance
			* @memberof module:altspace/components.one-per-user
			*/
			parent: {type: 'selector'}
		};
	}

	init(){
		let scene = this.el.sceneEl;
		this.syncSys = scene.systems['sync-system'];
		this.syncSys.instantiate(this.data.mixin, this.data.parent || this.el.parentNode, this.el);
	}
}

export default OnePerUser;
