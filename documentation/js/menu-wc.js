'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' : 'data-bs-target="#xs-controllers-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' :
                                            'id="xs-controllers-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' :
                                        'id="xs-injectables-links-module-AppModule-1f1f75071192e56c3845e6f497d3511a23511329e864a7e2e5223a180f4df26f2dd78f548f0718ba2c507a6c5bbbc168da154d5afb7df0dbcffe119ac94f4dee"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' :
                                            'id="xs-controllers-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' :
                                        'id="xs-injectables-links-module-AuthModule-d830664291b3dd06e833963e2600793fbae9f7416534a8caed954cf165ba90f4e41799d3046e4289219fca8ee444657d7e1a24cda5e09dc8e70e3efac9953adc"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' :
                                            'id="xs-controllers-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' :
                                        'id="xs-injectables-links-module-PostsModule-56e8362266021103ef4ecda84d9b0b91e529b4a5ec29f24565e329c9b8b785e727d61b364c516c344221ddda259da93d157c33408b976e91b684e5027097bfea"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' :
                                            'id="xs-controllers-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' :
                                        'id="xs-injectables-links-module-UsersModule-e12d368d51051131a77e4b562f028a68859b2e5649fdb0788cc4ae6410ff0ec05618e095d5173d14d2d2cd43013c0bf5445f6ae37b4cf8cefa10c773ef53a510"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDTO.html" data-type="entity-link" >CreatePostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDTO.html" data-type="entity-link" >CreatePostMetaOptionsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDTO.html" data-type="entity-link" >GetUserParamDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDTO.html" data-type="entity-link" >PatchPostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDTO.html" data-type="entity-link" >PatchUserDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});