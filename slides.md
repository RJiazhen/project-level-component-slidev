---
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
transition: slide-left
mdc: true
lineNumbers: true
---

# 项目级组件封装指南

阮家圳

---
transition: slide-left
---

## 页面专用的业务组件 VS 简单抽离的组件

```tsx {monaco-diff}{ editorOptions: { wordWrap:'on', lineNumbers:true, scrollBeyondLastLine: true, scrollbar: {vertical: true}} }
<<< @/src/pages/projectComponentsDemo/components/InputWithSelect/index.jsx
~~~
<<< @/src/components/SimplyExtractedInputWithSelect/index.jsx
```

---
transition: slide-left
---

## 简单抽离的组件 VS 添加透传参数的组件

```jsx {monaco-diff}{ editorOptions: { wordWrap:'on', lineNumbers:true, scrollBeyondLastLine: true, scrollbar: {vertical: true}}}
<<< @/src/components/SimplyExtractedInputWithSelect/index.jsx
~~~
<<< @/src/components/CompletedParameterInputWithSelect/index.jsx
```

---
transition: slide-left
---

## 添加透传参数的组件 VS 添加类型声明的组件


```tsx {monaco-diff}{ editorOptions: { wordWrap:'on', lineNumbers:true, scrollBeyondLastLine: true, scrollbar: {vertical: true}} }
<<< @/src/components/CompletedParameterInputWithSelect/index.jsx
~~~
<<< @/src/components/TypedInputWithSelect/index.tsx
```

---
transition: slide-left
---


## 添加类型声明的组件 VS 添加注释的组件

```tsx {monaco-diff}{ editorOptions: { wordWrap:'on', lineNumbers:true, scrollBeyondLastLine: true, scrollbar: {vertical: true}} }
<<< @/src/components/TypedInputWithSelect/index.tsx
~~~
<<< @/src/components/CompleteInputWithSelect/index.tsx
```



