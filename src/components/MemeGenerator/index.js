import {Component} from 'react'

import {
  Container,
  BgContainer,
  MemeGeneratorContainer,
  Para,
  Form,
  Label,
  Input,
  Select,
  Button,
  FormAndMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    topTextValue: '',
    bottomTextValue: '',
    bgImg: '',
    fontSize: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onGenerate = event => {
    event.preventDefault()
    const {bgImg, fontSize, topTextValue, bottomTextValue} = this.state
    this.setState({
      backgroundImageUrl: bgImg,
      topText: topTextValue,
      bottomText: bottomTextValue,
      activeFontSizeId: fontSize,
    })
  }

  imageUrl = event => {
    this.setState({bgImg: event.target.value})
  }

  topTextValue = event => {
    this.setState({topTextValue: event.target.value})
  }

  bottomTextValue = event => {
    this.setState({bottomTextValue: event.target.value})
  }

  onChangeFs = event => {
    this.setState({fontSize: event.target.value})
  }

  renderMemeGeneratorForm = () => {
    const {topTextValue, bottomTextValue, bgImg, fontSize} = this.state
    return (
      <Form onSubmit={this.onGenerate}>
        <Label htmlFor="img"> Image URL</Label>
        <Input
          type="text"
          id="img"
          placeholder="Enter the Image URL"
          onChange={this.imageUrl}
          value={bgImg}
        />

        <Label htmlFor="top"> Top Text</Label>
        <Input
          type="text"
          id="top"
          placeholder="Enter the Top Text"
          onChange={this.topTextValue}
          value={topTextValue}
        />

        <Label htmlFor="bottom"> Bottom Text</Label>
        <Input
          type="text"
          id="bottom"
          placeholder="Enter the Bottom Text"
          onChange={this.bottomTextValue}
          value={bottomTextValue}
        />

        <Label htmlFor="fs">Font Size</Label>
        <Select id="fs" onChange={this.onChangeFs} value={fontSize}>
          {fontSizesOptionsList.map(eachOption => (
            <option key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </option>
          ))}
        </Select>

        <Button type="submit">Generate</Button>
      </Form>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state
    return (
      <BgContainer bgImg={backgroundImageUrl} data-testid="meme">
        <Para size={activeFontSizeId}>{topText}</Para>
        <Para size={activeFontSizeId}>{bottomText}</Para>
      </BgContainer>
    )
  }

  render() {
    return (
      <Container>
        <MemeGeneratorContainer>
          <h1> Meme Generator</h1>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </Container>
    )
  }
}

export default MemeGenerator
