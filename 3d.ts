import * as THREE from 'three';

class Effet3D{
    name : HTMLElement | null;
    scene : object | null;
    camera :  object | null;
    constructor(selector: string){
        this.name= document.querySelector(selector);
    };

    createScene(): void {
        this.scene= new THREE.Scene();
        this.camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer= new THREE.WEBLGRender();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.appendChild(renderer.domElement);
    };

    createObject(){

    };
}