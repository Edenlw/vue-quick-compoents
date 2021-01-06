module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    // 等级分为三级： 0-不显示；1-显示警告warning; 2-显示错误error

    // //////////////////
    // /// vue.规范 /////
    // /////////////////
    'vue/max-attributes-per-line': [1, { // 多个特性的元素应该分多行撰写，每个特性一行
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/singleline-html-element-content-newline': 2, // 在单行元素的内容前后需要换行符
    'vue/multiline-html-element-content-newline': 2, // 在多行元素的内容之前和之后需要换行符
    'vue/name-property-casing': [2, 'PascalCase'], // JS/JSX中的组件名应该始终是帕斯卡命名法
    'vue/prop-name-casing': [2, 'camelCase'], // 在声明prop的时候，其命名应该始终使用驼峰命名
    'vue/require-v-for-key': 2, // 给v-for设置键值，与key结合使用，可以高效的更新虚拟DOM
    'vue/no-use-v-if-with-v-for': [2, {
      'allowUsingIterationVar': false
    }], // 不要把 v-if 和 v-for 用在同一个元素上——因为v-for 比 v-if 具有更高的优先级
    // //////////////////
    // /// js.规范 /////
    // /////////////////
    'arrow-spacing': [2, { // 在箭头函数之前/之后需要空格
      'before': true,
      'after': true
    }],
    'camelcase': [1, { // 需要驼峰命名
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'], // 要求或禁止使用尾随逗号；最后一个属性是不需要逗号
    'comma-spacing': [2, { // 强制逗号旁边的间距： 左右一个空格
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], // 逗号风格
    'eol-last': 2, // 在文件末尾要求或禁止换行
    'eqeqeq': [2, 'always', { 'null': 'ignore' }], // 是否使用全等
    'handle-callback-err': [1, '^(err|error)$'], // 强制执行回调错误处理
    'indent': [2, 2, { // 强制执行一致的缩进
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'], // 强制在JSX文件中一致使用单引号
    'quotes': [2, 'double', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'key-spacing': [2, { // 在对象属性中强制键和值之间的一致间距
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { // 关键字前后强制执行一致的间距
      'before': true,
      'after': true
    }],
    'new-cap': [2, { // 要求构造函数名称以大写字母开头
      'newIsCap': true,
      'capIsNew': false
    }],
    'no-class-assign': 2, // 禁止修改类声明的变量
    'no-cond-assign': 2, // 在条件语句中禁止赋值运算符
    'no-const-assign': 2, // 禁止修改使用const声明的变量
    'no-delete-var': 2, // 禁止删除变量
    'no-dupe-args': 2, // 在函数定义中禁止重复参数
    'no-dupe-class-members': 2, // 禁止在类成员中重复名称
    'no-dupe-keys': 2, // 禁止对象重复声明属性
    'no-empty-pattern': 2, // 不允许空的解构模式
    'no-eval': 2, // 禁止使用eval（）
    'no-ex-assign': 2, // 禁止在catch子句中重新分配异常
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-invalid-regexp': 2, // 禁止在RegExp中使用无效的正则表达式字符串
    'no-irregular-whitespace': 2, // 不允许不规则的空白
    'no-label-var': 2, // 禁止变量名称的标签
    'no-mixed-spaces-and-tabs': 2, // 禁止使用混合空格和制表符进行缩进
    'no-multi-spaces': 2, // 禁止多个空格
    'no-multi-str': 2, // 禁止多行字符串
    'no-multiple-empty-lines': [2, { // 禁止多个空行
      'max': 1
    }],
    'no-new-object': 2, // 不允许使用Object构造函数
    'no-unreachable': 2, // 返回，抛出，继续和中断语句后禁止无法访问的代码
    'no-unsafe-finally': 2, // 禁止finally块中的控制流语句
    'no-unused-vars': [2, { // 禁止使用未声明的变量
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2, // 禁止不必要的call()和apply()方法
    'no-whitespace-before-property': 2, // 在属性之前禁止空格
    'operator-linebreak': [2, 'after', { // 为维护强制执行一致的换行方式
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'], // 在块内要求或禁止填充
    'semi': [2, 'always'], // 强制语句分号结尾
    'space-before-blocks': [2, 'always'], // 不要存在多余的块空间
  }
};
