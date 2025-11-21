//Loading spinner for fallback

const Loading = () => {
  return (
    <section className="w-full h-[100vh] flex justify-center items-center border-2">
        <section className="w-18 h-18 md:w-18 md:h-18 border-t-2 border-l-2 border-r-2  border-blue-950 rounded-full animate-spin"></section>
        
    </section>
  )
}

export default Loading