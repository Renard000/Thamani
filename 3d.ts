import * as THREE from 'three';

class Effet3D{
    #name : HTMLElement | null;
    #scene : THREE.Scene | null;
    #camera : THREE.PerspectiveCamera | null;
    #forme : THREE.PlaneGeometry | null;
    #material : THREE.MeshBasicMaterial | null;
    #object : THREE.Mesh | null;

    constructor(selector: string){
        this.#name= document.querySelector(selector);
        this.#scene = null;
        this.#camera = null;
        this.#forme = null;
        this.#material = null;
        this.#object = null;
    };

    createScene(): void {
        this.#scene= new THREE.Scene();
        this.#camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer= new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.#name?.appendChild(renderer.domElement);
    };

    createObject(): void {
        this.#forme = new THREE.PlaneGeometry(2,2,2);
        this.#material = new THREE.MeshBasicMaterial({color:0xfff0, side: THREE.DoubleSide});
        this.#object = new THREE.Mesh(this.#forme, this.#material);
        this.#scene?.add(this.#object);

    };
}