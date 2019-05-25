import React, { Component } from 'react';
import '../css/Nosotros.css'


class Us extends Component {
    state = {}
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/assets/camisa_1.png" alt="nosotros" />
                </div>
                <div className="contenido">
                <h2>Sobre nosotros</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida dui nec risus elementum, eget accumsan libero sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed turpis orci, sollicitudin sed hendrerit ut, luctus sed lectus. Donec in dignissim quam. Curabitur dignissim suscipit auctor. Aenean est leo, facilisis at mattis sit amet, bibendum ut ante. Etiam mollis, odio nec consectetur placerat, augue nulla suscipit leo, et porttitor augue est quis nunc. Suspendisse potenti. Vivamus faucibus, arcu ut finibus finibus, erat felis porttitor sapien, vel pulvinar nisi massa ut enim. Nulla vestibulum tempus nunc, id lobortis sapien mattis eu. Etiam metus diam, auctor sed augue sed, volutpat faucibus sapien. Quisque dapibus nisi vel erat suscipit, ut viverra lectus dapibus. Pellentesque ipsum purus, condimentum at arcu vitae, pharetra fermentum risus. In hac habitasse platea dictumst. Proin eleifend nulla sed pulvinar euismod.
                    </p>
                </div>
            </div>
        );
    }
}

export default Us;