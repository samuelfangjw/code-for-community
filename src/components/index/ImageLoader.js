import React from "react"

const _loaded = {}

class ImageLoader extends React.Component {
  //initial state: image loaded stage
  state = {
    loaded: _loaded[this.props.src],
  }

  //define our loading and loaded image classes
  static defaultProps = {
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded",
    textClassName: "",
    textLoadingClassName: "text-loading",
    textLoadedClassName: "text-loaded",
  }

  //image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true
    this.setState(() => ({ loaded: true }))
  }

  render() {
    let { className, loadedClassName, loadingClassName, textClassName, textLoadedClassName, textLoadingClassName, ...props } = this.props

    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`

    textClassName = `${textClassName} ${
      this.state.loaded ? textLoadedClassName : textLoadingClassName
    }`

    return (
      <>
        <img
          src={this.props.src}
          onClick={this.props.onClick}
          className={className}
          onLoad={this.onLoad}
        />
        <div className={textClassName}>{this.props.foreground}</div>
      </>
    )
  }
}

export default ImageLoader
