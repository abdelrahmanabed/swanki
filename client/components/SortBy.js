
export default function Sorter(props) {
   return (
        
     <div className="  mt-2 mb-1 rounded-full space-x-2">
        <span className="font-bold text-xs">Sort Order</span>
        <select name="sorter" className="rounded-full mr-2 bg-third-c text-sm p-3" onChange={e => props.onSortOrderChange(e.target.value)}>          
          <option value="new">New In</option>
            <option value="PriceD">Price Descending</option>
            <option value="PriceA">Price Ascending</option>
        </select>
     </div>
            )
         
    }


            