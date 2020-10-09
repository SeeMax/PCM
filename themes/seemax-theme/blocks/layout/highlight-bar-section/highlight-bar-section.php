<?php

  /**
  * highlight-bar Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'highlight-bar-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'highlight-bar-section';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
  // Load values and assing defaults.
  $background = get_field('white_or_blue_background');
  $headline = get_field('headline') ?: strtoupper(get_the_title());
  $subheadline = get_field('subheadline');
  $addButton = get_field('add_a_button');
  $btnLabel = get_field('button_label');
  $btnLabelCopy = get_field('button_label_copy');
  $btnDest = get_field('button_destination');
  $btnFileLink = get_field('button_file');
  $btnFile = $btnFileLink['url'];
  $btnType = get_field('file_or_link');
?>
<section 
id="<?php echo esc_attr($id); ?>" 
class="<?php echo esc_attr($className);?>
<?php if($background == 'blue'):?> blue-shadow blue-highlight-bar<?php endif;?>"
> 
  <div class="content">
    <div class="highlight-text">
      <?php if(get_field('headline')):?>
        <h3 class="english-language"><?php echo $headline; ?></h3>
      <?php endif;?>
      <?php if(get_field('headline_copy')):?>
        <h3 class="spanish-language">
          <?php the_field('headline_copy');?>
        </h3>
      <?php endif;?>
      <?php if(get_field('subheadline')):?>
        <p class="english-language">
          <?php echo $subheadline; ?>
        </p>
      <?php endif;?>
      <?php if(get_field('subheadline_copy')):?>
        <p class="spanish-language">
          <?php the_field('subheadline_copy');?>
        </p>
      <?php endif;?>
    </div>

    <?php if($addButton == 'yes'):?>
      <div class="seemax-button"> 
        <?php if($background == 'link'):?> 
          <a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
        <?php else:?>
          <a class="c-block-fill" target="_blank" href="<?php echo $btnFile;?>"></a>
        <?php endif;?>
          
        <span class="english-language"><?php echo $btnLabel;?></span>
        <span class="spanish-language"><?php echo $btnLabelCopy;?></span>
      </div>
    <?php endif;?>
  </div>
</section>
