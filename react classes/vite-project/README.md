# Note

1. First letter of the component must be capital
2. Diffing algo and reconciliation
3. Only one component(function) allowed to be default export 
4. Wrap named export components in { }
```javascript
const Demo=()=>{
    return "Hello World"
}
```

5. Lifecycle method :
- class component uses life cycle methods to perform tasks
- life cycle methods have unnecessary boilerplate code so the application 
gets complex and hard to manage 
- Lifecycle Methods:
    - Mount 
    - update
    - Unmount 
- so that why we shifted to functional components 

6. we cannot re-render normal varaiable in jsx 

7. inside onclick or any event just write the function name, 

## useEffect 

>it is used to manage all the life cycle methods alone . 

>ui render ho gaya --> ab kuch extra kaam karo 

>use effect will take two parameters useEffect(useCallback,dependency-array)

```jsx
useEffect(()=> {},[])
```

>if the dependency array is empty then it will mount only once when the page reload for the first time 
