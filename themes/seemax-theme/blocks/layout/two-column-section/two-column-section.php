<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'two-column-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'two-column-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <?php if(get_field('section_title_color')  == 'orange'): ?>
    <div class="colored-back"></div> 
  <?php endif;?>
  <div class="content">
    <?php if(get_field('section_title_color')  == 'orange'): ?>
      <h2 class="h1 orange-title"><?php $title = the_field('section_title');?></h2>
    <?php else:?>
      <h2 class="h1"><?php $title = the_field('section_title');?></h2>
    <?php endif;?>
    <?php if( have_rows('single_card') ): ?>
      <?php while( have_rows('single_card') ): the_row();?>
        <?php 
          $label = get_sub_field('label');
          $headline = get_sub_field('headline');
          $body = get_sub_field('body');
          $showImage = get_sub_field('show_image');
          $showBtn = get_sub_field('show_button');
          $btnDest = get_sub_field('btn_dest');
          $btnText = get_sub_field('btn_text');
        ?>
        <div class="single-two-col white-shadow">
          <?php if($label):?>
            <div class="two-col-label"><?php echo $label;?></div>
          <?php endif;?>
          <?php if($headline):?>
            <h2><?php echo $headline;?></h2>
          <?php endif;?>
          <?php if($body):?>
            <p><?php echo $body;?></p>
          <?php endif;?>
                    
          <?php if($showImage  == 'yes'): ?>
            <?php if( have_rows('images_group') ): ?>
              <?php while( have_rows('images_group') ): the_row();?>
                <?php $image = get_sub_field('image');?>
                <img src='<?php echo $image['url']; ?>' alt='<?php echo $image['alt']; ?>'>
              <?php endwhile; ?>      
            <?php endif;?>
          <?php endif;?>

          <?php if($showBtn  == 'yes'): ?>
            <div class="seemax-button">
              <a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
              <span><?php echo $btnText;?></span>
            </div>
          <?php endif;?>
        </div>
      <?php endwhile; ?>  
    <?php endif;?>
  </div>  
</section>