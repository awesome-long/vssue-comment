(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{477:function(t,s,a){t.exports=a.p+"assets/img/01.92d64183.png"},478:function(t,s,a){t.exports=a.p+"assets/img/02.e2f4dccd.png"},479:function(t,s,a){t.exports=a.p+"assets/img/03.80cc6823.png"},480:function(t,s,a){t.exports=a.p+"assets/img/04.76254178.png"},481:function(t,s,a){t.exports=a.p+"assets/img/05.f3dd925b.png"},482:function(t,s,a){t.exports=a.p+"assets/img/06.fbd94bf4.png"},483:function(t,s,a){t.exports=a.p+"assets/img/07.8593d068.png"},484:function(t,s,a){t.exports=a.p+"assets/img/08.7d490811.png"},485:function(t,s,a){t.exports=a.p+"assets/img/09.a45ffc90.png"},486:function(t,s,a){t.exports=a.p+"assets/img/10.6adff499.png"},548:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("命令模式的优点：")]),t._v(" "),n("ul",[n("li",[t._v("GUI 消耗更多的资源和内存")]),t._v(" "),n("li",[t._v("命令行可以与其他系统集成")])]),t._v(" "),n("p",[t._v("目录：")]),t._v(" "),n("TOC",{attrs:{"include-level":[2,4]}}),t._v(" "),n("h2",{attrs:{id:"_1-使用-jmeter-进行负载测试-non-gui-模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-jmeter-进行负载测试-non-gui-模式"}},[t._v("#")]),t._v(" 1. 使用 JMeter 进行负载测试 (non-GUI 模式)")]),t._v(" "),n("p",[t._v("在命令提示符下查看使用 JMeter 并进行负载测试所涉及的步骤。")]),t._v(" "),n("h3",{attrs:{id:"_1-使用图形界面创建-test-plan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用图形界面创建-test-plan"}},[t._v("#")]),t._v(" 1. 使用图形界面创建 "),n("em",[t._v("Test Plan")])]),t._v(" "),n("h4",{attrs:{id:"_1-1-创建-test-plan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建-test-plan"}},[t._v("#")]),t._v(" 1.1 创建 Test Plan")]),t._v(" "),n("p",[t._v("在 JMeter 的用户界面创建 Test Plan（默认已经被创建）。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(477),alt:""}})]),t._v(" "),n("h4",{attrs:{id:"_1-2-配置-thread-group"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置-thread-group"}},[t._v("#")]),t._v(" 1.2 配置 Thread Group")]),t._v(" "),n("p",[t._v("添加 Thread Group 并且指定用户或者线程的数量和循环次数。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(478),alt:""}})]),t._v(" "),n("h4",{attrs:{id:"_1-3-配置-http-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-配置-http-request"}},[t._v("#")]),t._v(" 1.3 配置 HTTP Request")]),t._v(" "),n("p",[t._v("添加 HTTP Request 并且指定服务名称和路径。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(479),alt:""}})]),t._v(" "),n("h4",{attrs:{id:"_1-4-保存-test-plan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-保存-test-plan"}},[t._v("#")]),t._v(" 1.4 保存 Test Plan")]),t._v(" "),n("p",[n("img",{attrs:{src:a(480),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_2-使用命令运行-test-plan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用命令运行-test-plan"}},[t._v("#")]),t._v(" 2. 使用命令运行 "),n("em",[t._v("Test Plan")])]),t._v(" "),n("p",[t._v("在命令提示符下使用命令去运行 Test Plan ，如下：")]),t._v(" "),n("blockquote",[n("p",[t._v("jmeter -n -t [jmx file] -l [results file]")])]),t._v(" "),n("div",{staticClass:"language-powershell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -n: non-GUI mode")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -t: location for jmeter test script")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -l: Location of the result file")]),t._v("\nD:\\Program Files\\apache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jmeter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("3\\bin\nλ jmeter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..\\load_test\\HTTP Request 01.jmx"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..\\load_test\\HTTP Request 01.csv"')]),t._v("\nCreating summariser <summary>\nCreated the tree successfully "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\load_test\\HTTP Request 01"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmx\nStarting standalone test @ Thu Jul 09 11:25:03 CST 2020 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1594265103788"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nWaiting "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" possible Shutdown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("StopTestNow"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("HeapDump"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThreadDump message on port 4445\nWarning: Nashorn engine is planned to be removed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" a future JDK release\nsummary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("      1 in 00:00:00 =    5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:    45 Min:    45 Max:    45 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Active: 18 Started: 18 Finished: 0\nsummary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  70311 in 00:00:26 = 2734"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("3"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:    34 Min:     0 Max:  5289 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Active: 100 Started: 100 Finished: 0\nsummary =  70312 in 00:00:26 = 2713"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("9"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:    34 Min:     0 Max:  5289 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsummary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  21403 in 00:00:30 =  713"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("4"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:   139 Min:     0 Max:  9611 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Active: 100 Started: 100 Finished: 0\nsummary =  91715 in 00:00:56 = 1640"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("5"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:    59 Min:     0 Max:  9611 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsummary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   2492 in 00:00:05 =  545"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:   218 Min:     0 Max:  5707 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Active: 0 Started: 100 Finished: 100\nsummary =  94207 in 00:01:00 = 1557"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("6"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:    63 Min:     0 Max:  9611 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nTidying up "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("    @ Thu Jul 09 11:26:04 CST 2020 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1594265164574"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" of run\n\nD:\\Program Files\\apache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jmeter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("3\\bin\nλ\n")])])]),n("p",[t._v("一旦从命令行提示符运行结果，测试结果将被存储到 "),n("em",[t._v("HTTP Request 01.csv")]),t._v(" 文件。如下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(481),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"_2-生成报告"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成报告"}},[t._v("#")]),t._v(" 2. 生成报告")]),t._v(" "),n("p",[t._v("JMeter 支持从 "),n("em",[t._v("Test Plan")]),t._v(" 生成 dashboard 报告并获取图像和统计。")]),t._v(" "),n("p",[t._v("dashboard 生成器是 JMeter 的一个模块化扩展。在负载测试结束或者需求结束的时候，它默认读取和处理 "),n("em",[t._v("CSV")]),t._v(" 文件中的数据，去生成包含图像视图的 HTML 文件。")]),t._v(" "),n("p",[t._v("在命令提示符下使用命令去运行 Test Plan 并生成报告，如下：")]),t._v(" "),n("blockquote",[n("p",[t._v("jmeter -n -t [jmx file] -l [results file] -e -o [Path to web report folder]")])]),t._v(" "),n("div",{staticClass:"language-powershell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[t._v("D:\\Program Files\\apache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jmeter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("3\\bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -e: To generate HTML Reports")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -o: Location of the Output folder")]),t._v("\nλ jmeter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..\\load_test\\HTTP Request 01.jmx"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..\\load_test\\HTTP Request 01.csv"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v('o "'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\load_test\\HTTP Request 01\nCreating summariser <summary>\nCreated the tree successfully "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\load_test\\HTTP Request 01"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmx\nStarting standalone test @ Thu Jul 09 12:00:05 CST 2020 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1594267205806"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nWaiting "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" possible Shutdown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("StopTestNow"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("HeapDump"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThreadDump message on port 4445\nWarning: Nashorn engine is planned to be removed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" a future JDK release\nsummary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  10702 in 00:00:24 =  447"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("4"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:   109 Min:     0 Max: 12779 Err:    70 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("65"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Active: 100 Started: 100 Finished: 0\nsummary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  10707 in 00:00:30 =  353"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("8"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:   198 Min:     0 Max: 42074 Err:    56 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("52"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Active: 100 Started: 100 Finished: 0\nsummary =  21409 in 00:00:54 =  395"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:   154 Min:     0 Max: 42074 Err:   126 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("59"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsummary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   1801 in 00:00:06 =  290"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("6"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:  1486 Min:     0 Max: 59759 Err:     0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("00"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Active: 0 Started: 100 Finished: 100\nsummary =  23210 in 00:01:00 =  384"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("4"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s Avg:   257 Min:     0 Max: 59759 Err:   126 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("54"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nTidying up "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("    @ Thu Jul 09 12:01:06 CST 2020 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1594267266505"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" of run\n\nD:\\Program Files\\apache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jmeter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("3\\bin\nλ\n")])])]),n("p",[n("img",{attrs:{src:a(482),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"_3-测试报告矩阵介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试报告矩阵介绍"}},[t._v("#")]),t._v(" 3. 测试报告矩阵介绍")]),t._v(" "),n("p",[t._v("报告提供了以下指标：")]),t._v(" "),n("h3",{attrs:{id:"_1-apdex-application-performance-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-apdex-application-performance-index"}},[t._v("#")]),t._v(" 1. APDEX(Application Performance Index)")]),t._v(" "),n("p",[t._v("该表基于配置的值为每个事务计算可容忍和满足阈值：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(483),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_2-statistics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-statistics"}},[t._v("#")]),t._v(" 2. Statistics")]),t._v(" "),n("p",[t._v("提供每个事物的所有指标的摘要，包括3个可配置的百分位数：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(484),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_3-others"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-others"}},[t._v("#")]),t._v(" 3. Others")]),t._v(" "),n("p",[n("img",{attrs:{src:a(485),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(486),alt:"10"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);