function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{KPXA:function(n,e,t){"use strict";t.r(e);var i,o,c=t("2kYt"),s=t("i9Na"),l=t("8MJP"),r=t("1VvW"),a=t("C05f"),p=t("ppiH"),u=t("EM62"),b=[{path:"",component:(i=function(){function n(e,i){_classCallCheck(this,n),this._host=e,this._scrollSpyService=i,this.markdown=t("NNay"),this.activeSection=new a.a({})}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;p.add(this._host.nativeElement.querySelector("nav")),this._scrollSpyService.setOffset("window",100),this._subscription=this._scrollSpyService.observe("window").subscribe((function(e){null!=e&&(n.activeSection.next({id:e.id,elementId:e.scrollElementId}),console.info("ScrollSpyService: item:",e))}))}},{key:"ngOnDestroy",value:function(){this._subscription&&this._subscription.unsubscribe()}}]),n}(),i.\u0275fac=function(n){return new(n||i)(u.Pb(u.n),u.Pb(l.e))},i.\u0275cmp=u.Jb({type:i,selectors:[["app-test-case3"]],decls:26,vars:7,consts:[["uniScrollItem","section1"],["uniScrollItem","section2"],["uniScrollItem","section3"],["uniScrollItem","section4"],[3,"innerHtml"],["uniScrollSpy","section1",1,"section1"],["uniScrollSpy","section2",1,"section2"],["uniScrollSpy","section3",1,"section3"],["uniScrollSpy","section4",1,"section4"]],template:function(n,e){1&n&&(u.Sb(0,"markdown"),u.oc(1),u.Rb(),u.Sb(2,"h2"),u.oc(3,"Example"),u.Rb(),u.Sb(4,"nav"),u.Sb(5,"ul"),u.Sb(6,"li",0),u.oc(7,"Section 1"),u.Rb(),u.Sb(8,"li",1),u.oc(9,"Section 2"),u.Rb(),u.Sb(10,"li",2),u.oc(11,"Section 3"),u.Rb(),u.Sb(12,"li",3),u.oc(13,"Section 4"),u.Rb(),u.Sb(14,"li"),u.oc(15,"Active Section: [ "),u.Qb(16,"span",4),u.bc(17,"async"),u.oc(18,", "),u.Qb(19,"span",4),u.bc(20,"async"),u.oc(21," ]"),u.Rb(),u.Rb(),u.Rb(),u.Qb(22,"section",5),u.Qb(23,"section",6),u.Qb(24,"section",7),u.Qb(25,"section",8)),2&n&&(u.Fb(1),u.pc(e.markdown.default),u.Fb(15),u.fc("innerHtml",u.cc(17,3,e.activeSection).id,u.kc),u.Fb(3),u.fc("innerHtml",u.cc(20,5,e.activeSection).elementId,u.kc))},directives:[s.a,l.c,l.d],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block;padding:1rem}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:50px;background-color:#ff9240}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin:0;padding:1rem;color:#eaecee}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#ff9240;background-color:#fff}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{height:1000px}[_nghost-%COMP%]   section.section1[_ngcontent-%COMP%]{background-color:#036}[_nghost-%COMP%]   section.section2[_ngcontent-%COMP%]{background-color:#369}[_nghost-%COMP%]   section.section3[_ngcontent-%COMP%]{background-color:#69c}[_nghost-%COMP%]   section.section4[_ngcontent-%COMP%]{background-color:#9cf}"]}),i)}],S=((o=function n(){_classCallCheck(this,n)}).\u0275mod=u.Nb({type:o}),o.\u0275inj=u.Mb({factory:function(n){return new(n||o)},imports:[[r.e.forChild(b)],r.e]}),o);t.d(e,"TestCase3Module",(function(){return d}));var m,d=((m=function n(){_classCallCheck(this,n)}).\u0275mod=u.Nb({type:m}),m.\u0275inj=u.Mb({factory:function(n){return new(n||m)},imports:[[c.c,s.b,S,l.a.forRoot()]]}),m)},NNay:function(n,e,t){"use strict";t.r(e),e.default='You can find the complete test case at GitHub. [Test Case 3](https://github.com/uniprank/ngx-scrollspy/tree/master/library/TestCases/src/app/modules/test-case3)\n\n## TestCase3Component\n\n```js\n@Component({\n    selector: \'app-test-case3\',\n    templateUrl: \'./test-case3.component.html\',\n    styleUrls: [\'./test-case3.component.scss\']\n})\nexport class TestCase3Component implements OnInit, OnDestroy {\n    public activeSection: BehaviorSubject<{ id?: string; elementId?: string; nativeElement?: HTMLElement }> = new BehaviorSubject({});\n\n    private _subscription: Subscription;\n\n    constructor(private _scrollSpyService: ScrollSpyService) {}\n\n    ngOnInit() {\n        // set offset because 2 sticky menu bars width single height of 50px\n        this._scrollSpyService.setOffset(\'window\', 100);\n        // subscribe to window scroll listener, it is also possible to use an ScrollSpyElement id\n        this._subscription = this._scrollSpyService.observe(\'window\').subscribe(item => {\n            if (item != null) {\n                const _nextSection = {\n                    id: item.id,\n                    elementId: item.scrollElementId\n                };\n                this.activeSection.next(_nextSection);\n                console.info(`ScrollSpyService: item:`, item);\n            }\n        });\n    }\n\n    ngOnDestroy() {\n        if (this._subscription) {\n            this._subscription.unsubscribe();\n        }\n    }\n}\n```\n\n## TestCase3Component HTML\n\n```html\n<nav>\n    <ul>\n        <li uniScrollItem="section1">Section 1</li>\n        <li uniScrollItem="section2">Section 2</li>\n        <li uniScrollItem="section3">Section 3</li>\n        <li uniScrollItem="section4">Section 4</li>\n        <li>\n            Active Section: [ <span [innerHtml]="(activeSection | async).id"></span>,\n            <span [innerHtml]="(activeSection | async).elementId"></span> ]\n        </li>\n    </ul>\n</nav>\n<section uniScrollSpy="section1"></section>\n<section uniScrollSpy="section2"></section>\n<section uniScrollSpy="section3"></section>\n<section uniScrollSpy="section4"></section>\n```\n'}}]);