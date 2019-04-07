You can find the complete test case at GitHub. [Test Case 2](https://github.com/uniprank/ngx-scrollspy/tree/master/library/TestCases/src/app/modules/test-case2)

## TestCase2Component

```js
@Component({
    selector: 'app-test-case2',
    templateUrl: './test-case2.component.html',
    styleUrls: ['./test-case2.component.scss']
})
export class TestCase2Component implements OnInit {
    constructor() {}

    ngOnInit() {}
}
```

## TestCase1Component HTML

```html
<div>
    <h2>Overview</h2>
    <nav>
        <ul>
            <li uniScrollItem="section1" stream="overview">Section 1</li>
            <li uniScrollItem="section2" stream="overview">Section 2</li>
            <li uniScrollItem="section3" stream="overview">Section 3</li>
            <li uniScrollItem="section4" stream="overview">Section 4</li>
        </ul>
    </nav>
    <div uniScrollElement="overview" direction="horizontal">
        <section uniScrollSpy="section1" stream="overview" class="section1"></section>
        <section uniScrollSpy="section2" stream="overview" class="section2"></section>
        <section uniScrollSpy="section3" stream="overview" class="section3"></section>
        <section uniScrollSpy="section4" stream="overview" class="section4"></section>
    </div>
</div>
<div>
    <h2>Overview 2</h2>
    <nav>
        <ul>
            <li uniScrollItem="section5" stream="overview2">Section 5</li>
            <li uniScrollItem="section6" stream="overview2">Section 6</li>
            <li uniScrollItem="section7" stream="overview2">Section 7</li>
            <li uniScrollItem="section8" stream="overview2">Section 8</li>
        </ul>
    </nav>
    <div uniScrollElement="overview2" direction="horizontal">
        <section uniScrollSpy="section5" stream="overview2" class="section1"></section>
        <section uniScrollSpy="section6" stream="overview2" class="section2"></section>
        <section uniScrollSpy="section7" stream="overview2" class="section3"></section>
        <section uniScrollSpy="section8" stream="overview2" class="section4"></section>
    </div>
</div>
```