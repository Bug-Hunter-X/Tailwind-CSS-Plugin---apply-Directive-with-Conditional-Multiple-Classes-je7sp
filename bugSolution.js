The solution avoids using `@apply` for conditional class application. Instead, it directly applies the classes within the plugin:

```javascript
module.exports = function ({ addUtilities }) {
  addUtilities({
    '.my-conditional-class': {
      // Direct class application for reliable conditional styling
      '&:hover': props => props.isActive ? 'text-blue-500 bg-gray-100' : 'text-gray-500'
      // Add other states as needed
    }
  })
}
```

This approach ensures that classes are reliably applied based on the `isActive` prop. Consider using other methods like adding CSS variables or writing more complex conditions if the complexity increases, or if needed.