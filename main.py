import streamlit as st
from PIL import Image
import requests
from io import BytesIO
# from transformers import ViltProcessor, ViltForQuestionAnswering
from dotenv import load_dotenv
import os
import google.generativeai as genai

# ff4b4b
def fashion_recommender():
    st.set_page_config(layout="wide", page_title="Vastra-Agya")
    # processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-vqa")
    # model = ViltForQuestionAnswering.from_pretrained("dandelin/vilt-b32-finetuned-vqa")
    
    st.markdown("""
                <style>
                div[data-baseweb="select"]>div{
                background-color:#cac292;   
                color:#353839;
                }
                </style>
                """,unsafe_allow_html=True)
   
    st.title('Fashion Recommender System')


    # def get_answer(image, text):
    #         try:
    #             # Load and process the image
    #             img = Image.open(BytesIO(image)).convert("RGB")

    #             # Prepare inputs
    #             encoding = processor(img, text, return_tensors="pt")

    #             # Forward pass
    #             outputs = model(**encoding)
    #             logits = outputs.logits
    #             idx = logits.argmax(-1).item()
    #             answer = model.config.id2label[idx]

    #             return answer

    #         except Exception as e:
    #             return str(e)

    #     # Set up the Streamlit app
    #     # st.title("Visual Question Answering")
    # st.write("Upload an image and enter a question to get an answer.")

    #     # Create columns for image upload and input fields
    # col1, col2 = st.columns(2)

    #     # Image upload
    # with col1:
    #     uploaded_file = st.file_uploader("Upload Image", type=["jpg", "jpeg", "png"])
    #     st.image(uploaded_file, use_column_width=True)

    # # Question input
    # with col2:
    #     question = st.text_input("Question")

    #     # Process the image and question when both are provided
    #     if uploaded_file and question is not None:
    #         if st.button("Ask Question"):
    #             image = Image.open(uploaded_file)
    #             image_byte_array = BytesIO()
    #             image.save(image_byte_array, format='JPEG')
    #             image_bytes = image_byte_array.getvalue()

    #             # Get the answer
    #             answer = get_answer(image_bytes, question)

    #             # Display the answer
    #             st.success("Answer: " + answer)
    # Upload image
    uploaded_image = st.file_uploader("Upload Image", type=["jpg", "jpeg", "png"])

    if uploaded_image is not None:
        # Display uploaded image
        st.image(uploaded_image, caption='Uploaded Image', use_column_width=True)
        
        # Process the image (add your image processing logic here)
        # For example, you can use PIL to open and display the image
        image = Image.open(uploaded_image)
        st.write("Image processed successfully.")
    else:
        st.write("Please upload an image.\n\nOR")

    # Dropdowns for selecting options
    selected_gender = st.selectbox('Select Gender', ['Male', 'Female'])
    selected_category = st.selectbox('Select Category', ['Shirts', 'Trousers', 'Dresses','Formals','Baggy Jeans','Shoes', 'Accessories'])
    selected_material = st.selectbox('Select Cloth Material', ['Cotton', 'Woollen', 'Nylon'])
    selected_age_group = st.selectbox('Select Age Group', ['Adult', 'Teenager', 'Child'])
    selected_size = st.selectbox('Select Size', ['M', 'S', 'L','XL'])
    selected_occasion = st.selectbox('Select Occasion', ['Casual', 'Formal', 'Party','Wedding'])


    # Display selected options
    # st.write('Selected Gender:', selected_gender)
    # st.write('Selected Category:', selected_category)

    #  genai part
    genai.configure(api_key="AIzaSyDE6DlNwYRS748vy2rD2Vy9Ie1ELa5BJKY")
    def details():
        pass
    prompt="""You are a reputed fashion designer who designs as well as recommend clothes to users based on their details, focusing on all their needs like size, gender, occasion, every single details. keep in kind we are here focusing on Indian citizens only and suggest clotes as well as what improvement he/she can make in his clothing style for particular need. tell all these points in around 300 words"""
    req = f"Gender is {selected_gender},the user is {selected_age_group}, category of cloth is {selected_category}, selected material is {selected_material}, size of user is {selected_size}, and he is going to wear this on {selected_occasion} "
    def generate_content_gemini(prompt,fashion_req):
        try:
            model=genai.GenerativeModel("gemini-pro")
            response = model.generate_content(prompt+fashion_req)
            return response.text

        except Exception as e:
            raise e
        
    if st.button("generate"):
        text_res=generate_content_gemini(prompt,req)
        st.markdown("Recommendation goes like:")
        st.write(text_res)

    # st.write('Placeholder recommendation based on selected options...')

if __name__ == "__main__":
    fashion_recommender()
