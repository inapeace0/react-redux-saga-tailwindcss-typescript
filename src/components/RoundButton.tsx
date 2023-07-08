const RoundButton = ({ children, color }: { children: string; color: string }) => (
   <button className='p-2 m-1 rounded-md text-white' style={{ background: color }}>
      {children}
   </button>
)

export default RoundButton
