const withPreLoadingOption = (Component) => (props) => {
    if (props.isLoading) return <div> ... Loading data.</div>;
    if (!props.data) return <div>No data loaded yet.</div>;
    if (!props.data.length) return <div>Data is empty.</div>;
  
    return <Component {...props} />;
  };
export default withPreLoadingOption